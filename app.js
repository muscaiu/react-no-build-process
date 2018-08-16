(function () {
    "use strict";

    function ProductImage(props) {
        return React.createElement("img", {
            src: "./assets/red.jpg",
            alt: "product image"
        })
    }

    function PruductCustomizer(props) {
        return React.createElement(
            'div',
            { className: "customizer" },
            React.createElement(
                "div",
                { className: "product-image" },
                React.createElement(ProductImage))
        );
    }

    ReactDOM.render(
        React.createElement(PruductCustomizer),
        document.getElementById('react-root')
    );
})();
