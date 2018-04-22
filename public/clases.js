class Usuario {
    constructor(pCedula, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pEmail, pTelefono, pfechaNacimiento, pContrasenna) {
        this.cedula = pCedula;
        this.primerNombre = pPrimerNombre;
        this.segundoNombre = pSegundoNombre;
        this.primerApellido = pPrimerApellido;
        this.segundoApellido = pSegundoApellido;
        this.correo = pEmail;
        this.telefono = pTelefono;
        this.fechaNacimiento = pfechaNacimiento;
        this.contrasenna = pContrasenna
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
