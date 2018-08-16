(function () {
    "use strict";

    function PruductCustomizer(props) {
        return React.createElement(
            'div',
            { className: "customizer" },
            "Product customizer will go here"
        );
    }

    ReactDOM.render(
        React.createElement(PruductCustomizer),
        document.getElementById('react-root')
    );
})();
