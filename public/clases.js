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

    obtenerNombreCompleto(){
        let nombreCompleto = this.primerNombre + ' ' + this.segundoNombre + ' ' + this.primerApellido + ' ';
        return nombreCompleto;
    }
    obtenerDatosProvCantDist(){
        let provCantDist = this.provincia + ', ' + this.canton + ', ' + this.distrito + ' ';
        return provCantDist;
    }
}

class Hotel {
    constructor(pNombre, pLatitud, pLongitud, pProvincia, pCanton, pDistrito, pDireccionExacta, pTelServicioCliente, pTelReservaciones, pCorreoReservaciones, pFoto, pRating){
        this.nombre = pNombre;
        this.latitud = pLatitud;
        this.longitud = pLongitud;
        this.provincia = pProvincia;
        this.canton = pCanton;
        this.distrito = pDistrito;
        this.direccionexacta = pDireccionExacta;
        this.telserviciocliente = pTelServicioCliente;
        this.telreservaciones = pTelReservaciones;
        this.correoreservaciones = pCorreoReservaciones;
        this.foto = pFoto;
        this.rating = [];
        
    }

}