import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
    const babelLoader = buildBabelLoader(options)

    const cssLoader = buildCssLoader(isDev)

    const typeScripLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const fontLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    }

    return [
        fileLoader,
        fontLoader,
        svgLoader,
        babelLoader,
        typeScripLoader,
        cssLoader,
    ]
}
