import dts from 'unplugin-dts/vite';
import { defineConfig as defineConfigVite } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export const defineConfig = (options = {}) => {
    const { entry = ['src/index.ts'], formats = ['es'], plugins = [], target } = options;

    return defineConfigVite({
        build: {
            lib: {
                entry,
                fileName: (_format, entryName) => `${entryName}.js`,
                formats,
            },
            minify: false,
            rollupOptions: {
                external: [
                    /^node:/,
                    /^@acusti\//,
                    'clsx',
                    'react',
                    'react/compiler-runtime',
                    'react/jsx-runtime',
                    'react-dom',
                ],
            },
            sourcemap: true,
            ...(target ? { target } : {}),
        },
        plugins: [
            tsconfigPaths(), // ✅ added here
            ...plugins,
            dts({ exclude: ['**/*.test.ts', '**/*.test.tsx'] }),
        ],
    });
};

// React Compiler logging setup
export const compilerOptions = {
    environment: {
        enableTreatRefLikeIdentifiersAsRefs: true,
    },
    logger: {
        logEvent(filename, event) {
            if (event.kind !== 'CompileError') return;
            console.log('React Compiler logger', filename, event.detail);
        },
    },
    reportableLevels: new Set([
        'InvalidJS',
        'InvalidReact',
        'InvalidConfig',
        'CannotPreserveMemoization',
        'Todo',
        'Invariant',
    ]),
};

