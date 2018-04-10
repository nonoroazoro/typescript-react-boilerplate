// see https://github.com/facebook/create-react-app/issues/3199
require("raf/polyfill");

const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });
