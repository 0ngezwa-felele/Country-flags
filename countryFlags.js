function mainList() {
    var list = []

    function setList(name) {
        var char = name[0].toUpperCase() + name.slice(1).toLowerCase();
        if (!list.includes(char)) {
            list.push(char)
        }
    }
    function display() {
        return list
    }

    return{
        setList,
        display
    }
}