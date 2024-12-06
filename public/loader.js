(() => {
    console.log(">>> Loader script is running");
    // document.currentScript is only supported by Chrome, Firefox, and Opera
    const script = document.currentScript;
    const loadWidget = () => {
        const widget = document.createElement("div");
        const widgetStyle = widget.style;
        widgetStyle.display = "none";
        widgetStyle.boxSizing = "border-box";
        widgetStyle.width = "400px";
        widgetStyle.height = "647px";
        widgetStyle.position = "absolute";
        widgetStyle.top = "40px";
        widgetStyle.right = "40px";

        // Create iframe here
        const iframe = document.createElement("iframe");
        const iframeStyle = iframe.style;
        iframeStyle.boxSizing = "borderBox";
        iframeStyle.position = "absolute";
        iframeStyle.right = 0;
        iframeStyle.top = 0;
        iframeStyle.width = "100%";
        iframeStyle.height = "100%";
        iframeStyle.border = 0;
        iframeStyle.margin = 0;
        iframeStyle.padding = 0;
        iframeStyle.width = "500px";

        widget.appendChild(iframe);
        
        // Only add widget to the document when the iframe is loaded
        iframe.addEventListener("load", () => widgetStyle.display = "block" );

        const widgetUrl = `http://localhost:3000/chat`;
        iframe.src = widgetUrl;

        document.body.appendChild(widget);
    }
    if (document.readyState === "complete") {
        console.log('>>>>> Document is already loaded');
        loadWidget();
    } else {
        console.log('>>>>> Document is not loaded yet');
        document.addEventListener("readystatechange", () => {
            if ( document.readyState === "complete" ) {
                loadWidget();
            }
        });
    }
})();