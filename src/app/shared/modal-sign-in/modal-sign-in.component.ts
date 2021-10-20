import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-sign-in',
  templateUrl: './modal-sign-in.component.html',
  styleUrls: ['./modal-sign-in.component.css']
})
export class ModalSignInComponent implements OnInit {

  constructor( public modal:NgbModal) { }

  ngOnInit(): void {
  }

  simpleAlert(){
    Swal.fire(`
    <div style="position:relative; display:flex; border: black 1px solid;">
    <div style="position:relative; padding:10px; text-aling:center;background-color:#3F3F3F; color:white; width:60%; height:800px;">
    <h6 style="position:relative; top:40%;">Términos de Uso</h6>
    </div>
    <div  style="position:relative; top:0px; text-align:justify; font-size:12px; padding:5px; height:800px; overflow-y:auto;">
    Al u�lizar nuestros Servicios, ya sea como invitado, como usuario registrado o de otro modo,
    acepta que estos Términos de servicio regirán su relación con Fire Stadium. Si no está completamente
    de acuerdo con estos Términos de servicio, no debe u�lizar ninguno de nuestros Servicios.
    Fire Stadium no está respaldado, afiliado directamente, mantenido o patrocinado por Apple Inc,
    Electronic Arts, Ac�vision Blizzard, Take-Two Interac�ve, Microso�, Xbox, Sony, Playsta�on o Epic
    Games ni ningún otro desarrollador. Todo el contenido, los �tulos de los juegos, los nombres
    comerciales y / o la imagen comercial, las marcas comerciales, el material gráfico y las imágenes
    asociadas son marcas comerciales y / o material protegido por derechos de autor de sus respec�vos
    propietarios.
    Acceso a la cuenta y asignación permi�da
    a) Al u�lizar los Servicios, usted garan�za y declara que �ene al menos 18 años de edad y que
    es legalmente competente para leer, comprender y aceptar las disposiciones de este
    acuerdo. Si es menor de 18 años, no debe u�lizar ninguna parte de los Servicios, crear una
    cuenta ni enviar ninguna información personal a la Fire Stadium a través de los Servicios.
    b) Si anteriormente se le ha prohibido el uso de los Servicios de Fire Stadium, no podrá usar
    nuestros Servicios.
    c) Solo puede tener una cuenta. Si se descubre que ha registrado varias Cuentas, está
    compar�endo Cuentas con otra persona o está accediendo a los Servicios a través de una
    cuenta que no es la suya, se cancelarán todas las Cuentas afectadas por dicho uso y todas
    las ganancias del Par�do asociadas con eso. La cuenta puede ser incautada por Fire Stadium.
    d) Si usted es padre y cree que su hijo puede haber creado una cuenta, contáctenos con los
    detalles de esa cuenta en help@/////.co para eliminarla.
    Propiedad y licencia limitada
    a) Los Servicios son propiedad o están autorizados por Fire Stadium y están protegidos por
    Derechos de propiedad intelectual y otras leyes de derechos de propiedad. Fire Stadium se reserva
    todos los derechos, �tulos e intereses en y para los Servicios, incluidos, entre otros, todos los Derechos
    de propiedad intelectual y otros derechos de propiedad que no se le otorgan explícitamente en estos
    Términos. Su uso permi�do de los Servicios está limitado por los Derechos de Propiedad Intelectual de
    Fire Stadium.
    b) Sujeto a su acuerdo y al cumplimiento con�nuo de estos Términos de servicio y cualquier otra
    polí�ca relevante de la Fire Stadium, la Fire Stadium le otorga una licencia no comercial, no exclusiva,
    intransferible, revocable y limitada, sujeta a las limitaciones. en estos Términos, para acceder y u�lizar
    los Servicios para sus propios fines de entretenimiento. Acepta que no u�lizará los Servicios para ningún
    otro propósito. Usted reconoce que para que Fire Stadium pueda brindarle Servicios, es necesario que
    también brinde funciones relacionadas, como análisis, medición, personalización de anuncios,
    procesamiento de transacciones financieras, prevención de fraude, verificaciones de iden�dad, medidas
    de seguridad, marke�ng y atención al cliente. apoyo.
    </div>
    </div>
    `);
  }
   
  alertWithSuccess(){
    Swal.fire('Gracias...', 'Sus datos se registraron con exito! <br>Por favor activa tu cuenta desde el email que acabamos de enviarte', 'success');
  }
   /*
  confirmBox(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result:any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
*/
}
