function printa() {
    var Estado;
    (function (Estado) {
        Estado[Estado["SP"] = 0] = "SP";
        Estado[Estado["SC"] = 1] = "SC";
        Estado[Estado["SE"] = 2] = "SE";
    })(Estado || (Estado = {}));
    var uf = Estado[3];
    console.log(uf);
}
printa();
