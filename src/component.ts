const component = {
    description: "⚛ react component",
    prompts: [
        {
            type: "input",
            name: "name",
            message: "component name",
        },
    ],
    actions: [
        {
            type: "add",
            path: "src/components/{{pascalCase name}}/index.ts",
            templateFile: "./templates/index.hbs",
        },
        {
            type: "add",
            path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
            templateFile: "./templates/component.hbs",
        },
        {
            type: "add",
            path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
            templateFile: "./templates/test.hbs",
        },
        {
            type: "add",
            path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.css",
            templateFile: "./templates/styles.hbs",
        },
    ],
}

export default component
