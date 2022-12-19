This is the twitter react fronted application
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#调试使用的是json-server
React五步法：
1、将设计好的UI划分为组件层级
2、用React创建一个静态版本


#style技术选择：
css 无法编写嵌套
scss可以写简单的嵌套
css modules不用关系命名空间，不会出现会被覆盖的样式

#工程化的配置信息
craco.config.js：配置webpack文件快捷方式
jsconfig.json:给vscode使用的js相关配置文件