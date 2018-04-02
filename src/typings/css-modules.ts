// Declaration for css-modules, see https://stackoverflow.com/questions/48142521/ts-loader-css-loader-not-being-able-to-import-resolve-file/48154626#48154626
declare module "*.less" {
    const styles: { [key: string]: string };
    export default styles;
}
