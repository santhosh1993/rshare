const template = ({imports, interfaces, componentName, props, jsx}, {tpl}) => {
  props.pop()
  const comment = '// @ts-nocheck '
  return tpl`
  ${comment}

  import React, {forwardRef, memo} from 'react'
  import type {Component, ForwardedRef} from 'react'
  ${imports.filter((o) => o.source.value !== 'react')}

  ${interfaces}
  
  const ${componentName} = memo(forwardRef((${props}, ref: ForwardedRef<Component<SvgProps, any, any>>) => {
    return ${jsx};
  }))
  
  export default ${componentName}
    `
}

module.exports = template
