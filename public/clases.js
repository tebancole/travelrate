class Usuario {
    constructor(pcedula, pprimernombre, psegundonombre, pprimerapellido, psegundoapellido, pcorreo, ptelefono, pfechanacimiento, pcontrasenna, proll,pestado) {
        this.cedula = pcedula;
        this.primernombre = pprimernombre;
        this.segundonombre = psegundonombre;
        this.primerapellido = pprimerapellido;
        this.segundoapellido = psegundoapellido;
        this.correo = pcorreo;
        this.telefono = ptelefono;
        this.fechanacimiento = pfechanacimiento;
        this.contrasenna = pcontrasenna;
        this.rol = proll;
         // 1 usuario, 2 admin
         this.estado = pestado || 'activo';
       
    }

    cambiarEstado(estado){
        this.estado = estado;
    }
}

class Hotel {
    constructor(pid,pnombre, platitud, plongitud, pprovincia, pcanton, pdistrito, pdireccionexacta, ptelserviciocliente, ptelreservaciones,pcorreoserviciocliente, pcorreoreservaciones, pfoto, pestado, prating){
        this.id = pid;
        this.nombre = pnombre;
        this.latitud = platitud;
        this.longitud = plongitud;
        this.provincia = pprovincia;
        this.canton = pcanton;
        this.distrito = pdistrito;
        this.direccionexacta = pdireccionexacta;
        this.telserviciocliente = ptelserviciocliente;
        this.telreservaciones = ptelreservaciones;
        this.correoserviciocliente = pcorreoserviciocliente;
        this.correoreservaciones = pcorreoreservaciones;
        this.foto = pfoto;
        this.rating = prating || [];
        this.ratingsuma = 0;
        this.estado = pestado || 'activo';
    }

    agregarRating(rate) {
        this.rating.push(rate);
    }

    cambiarEstado(estado){
        this.estado = estado;
    }

}