const styled = (aElement) => {
    const el = document.createElement(aElement);
    return args => {
        const styles = args[0];
        el.style = styles;
        return el;
    };
};

const title = styled("h1")`
    border-radius: 10px;
    background-color: red;
    color: blue;
`;

const subtitle = styled("span")`
    color: green;
`;

title.innerText = "We just cloned";
subtitle.innerText = "Styled Components"

console.log(title);

document.body.append(title, subtitle);