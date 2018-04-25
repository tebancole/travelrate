class Usuario {
    constructor(pCedula, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pEmail, pTelefono, pfechaNacimiento, pContrasenna, pRol) {
        this.cedula = pCedula;
        this.primerNombre = pPrimerNombre;
        this.segundoNombre = pSegundoNombre;
        this.primerApellido = pPrimerApellido;
        this.segundoApellido = pSegundoApellido;
        this.correo = pEmail;
        this.telefono = pTelefono;
        this.fechaNacimiento = pfechaNacimiento;
        this.contrasenna = pContrasenna;
        this.rol = pRol;
        // 1 usuario, 2 admin
    }
}

class Hotel {
    constructor(pid,pnombre, platitud, plongitud, pprovincia, pcanton, pdistrito, pdireccionexacta, ptelserviciocliente, ptelreservaciones,pcorreoserviciocliente, pcorreoreservaciones, pfoto, prating){
        this._id = pid;
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
        
    }

}