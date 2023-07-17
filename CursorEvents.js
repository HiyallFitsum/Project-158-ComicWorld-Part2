AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: { default: "", type: "string"}
    },

    init : function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },

    handleMouseEnterEvents : function () {
        this.el.addEventListener("mouseenter", ()=>{
            const id = this.el.getAttribute("id");
            const comicsId = ["spiderMan", "ironMan", "incredibleHulk", "captainAmerica"]
            if(comicsId.includes(id)){
                const comicsContainer = document.querySelector(`#comics-container`)
                this.el.setAttribute("material", {
                    color: "blue",
                })
            }
        })
    },

    handleMouseLeaveEvents : function () {
        this.el.addEventListener("mouseleave", ()=>{
            const id = this.el.getAttribute("id");
            const comicsId = ["spiderMan", "ironMan", "incredibleHulk", "captainAmerica"]
            if(comicsId.includes(id)){
                const comicsContainer = document.querySelector(`#comics-container`)
                comicsContainer.setAttribute("cursor-listener", {
                    selectedItemId: this.data,
                })
                this.el.setAttribute("material", {
                    color: "white",
                })
            }
        })
    }
})