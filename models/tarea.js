const { v4: uuidv4 } = require('uuid');

// Desde esta clase manejo una sola tarea

class Tarea {

    id = '';
    desc = '';
    completadoEn = null;

    constructor ( desc ) {

        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }

}


module.exports = Tarea;