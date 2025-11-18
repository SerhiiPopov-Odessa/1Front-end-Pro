const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

let mode = "development";
let devtool = "inline-source-map";
if (process.env.NODE_ENV === "production") {
  mode = "production",
    devtool = "source-map"
}
console.log(mode + "  mode")
console.log(devtool + "  devtool")

module.exports = {
  mode: mode,
  devtool: devtool, /* none: не додає Source Maps
                                source-map: ідеально підходить для режиму production, надає окрему Source Map, яку можна згорнути та додає посилання в бандл, щоб інструменти розробки знали про те, що Source Map доступна
                                inline-source-map: ідеально підходить для режиму development, вбудовує Source Maps як data:URL */

  //entry: "./src/index.js",  // Вхідний файл вашого додатка
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js') // Вхідний файл вашого додатка + имя совпадает index пойдет в [name]
  },
  output: {
    filename: "[name].bundle.[contenthash].js",  // Назва вихідного файлу
    path: path.resolve(__dirname, 'dist'),  // Директорія виведення
    clean: true, // очищает от лишних файлов
    
  },
  module: {
    rules: [
      
      // Babel
      {
        test: /\.m?js$/,                 // какие файлы обрабатывать
        exclude: /node_modules/,         // исключаем внешние библиотеки
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',     // preset для поддержки старых браузеров
                {
                  targets: "> 0.25%, not dead",   // какие браузеры поддерживаем
                  useBuiltIns: "usage",            // автоматически добавляет нужные полифилы
                  corejs: "3.33"                   // версия core-js для полифилов
                }
              ]
            ]
          }
        }
      },

      
      // обработка .css .scss .sass
      {
        test: /\.(sa|sc|c)ss$/i,         // обработка .css .scss .sass
        use: [
          // Выносим CSS в отдельный файл styles.css
          MiniCssExtractPlugin.loader,

          // Обрабатывает импорты внутри CSS: @import, url()
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2           // пропускаем через postcss и sass-loader
            }
          },

          // PostCSS — подключаем postcss-preset-env и cssnano
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  // Позволяет использовать фичи будущего CSS
                  // и содержит autoprefixer
                  require('postcss-preset-env')({
                    stage: 1,                         // уровень поддержки фич
                    features: {
                      "nesting-rules": true           // включаем вложенность CSS
                    }
                  }),

                  // Минификация CSS
                  require('cssnano')({ preset: 'default' })
                ]
              }
            }
          },

          // Компиляция SCSS/SASS в обычный CSS
          'sass-loader'
        ],
      }
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new HtmlWebpackPlugin({
      title: "Hello WebPack",
      filename: 'index.html', // название на выходе
      template: path.resolve(__dirname, 'src', 'index.html') // берёт за основу, если нет то создаст новый и вставит Hello WebPack
    })],

  // Оптимизация JS и CSS
  optimization: {
    minimize: true, // включает минификацию JS (Terser по умолчанию)

    minimizer: [
      '...',
      new CssMinimizerPlugin(),   // минификация CSS
    ],

    // Конкатинация модулей (scope hoisting)
    concatenateModules: true,

    // Слияние повторяющихся JS чанков
    mergeDuplicateChunks: true,

    // Отменяем разделение JS на отдельные файлы — всё в bundle.js
    splitChunks: false,

    // Улучшает стабильность хэшей и порядок модулей
    moduleIds: 'deterministic',
    chunkIds: 'deterministic',
  }
};
