import { ref, computed, watchEffect } from 'vue';
import {
    useStore as useReplStore,
    useVueImportMap,
    mergeImportMap,
    type ImportMap,
} from '@vue/repl';
import { useMounted } from '@vueuse/core';
// @ts-ignore
import welcomeSFCCode from '../template/Welcome.vue?raw';

export function useStore() {
    const mounted = useMounted();
    if (!mounted) return;

    const defaultImportMap = ref<ImportMap>({
        imports: {
            'echarts': 'https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.esm.min.js',
        },
    });

    const { importMap } = useVueImportMap();

    const builtinImportMap = computed(() => {
        return mergeImportMap(defaultImportMap.value, importMap.value);
    });

    const template = ref({
        welcomeSFC: welcomeSFCCode,
    });

    const store = useReplStore(
        {
            builtinImportMap,
            template,
        },
        location.hash,
    );

    watchEffect(() => history.replaceState({}, '', store.serialize()));

    return store;
}
