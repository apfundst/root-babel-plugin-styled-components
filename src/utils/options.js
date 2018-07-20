function getOption({ opts }, name, defaultValue = true) {
  return opts[name] === undefined || opts[name] === null
    ? defaultValue
    : opts[name]
}

export const useDisplayName = state => getOption(state, 'displayName')
export const useRootNode = state => getOption(state, 'rootNode', false)
export const useSSR = state => getOption(state, 'ssr', false)
export const useFileName = state => getOption(state, 'fileName')
export const useMinify = state => getOption(state, 'minify')
export const useTranspileTemplateLiterals = state =>
  getOption(state, 'transpileTemplateLiterals')
export const useUglifyPure = state => getOption(state, 'uglifyPure', false)
