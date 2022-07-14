

const ChangeCssRootVariables = (theme) => {
    const root = document.querySelector(':root')

    const components = ['--body_bg', '--components_bg', '--card-background', '--card-shadow', '--text-color']

    components.forEach(component => {
        root.style.setProperty(`${component}_default`, `var(${component}_${theme})`)
    })
}

export default ChangeCssRootVariables