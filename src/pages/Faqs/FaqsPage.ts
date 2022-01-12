import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FaqsPage extends Vue {

    private faqs : Map<String, String> = new Map([
        [
            '¿Cómo me puedes ayudar?' ,
            'Estoy de tu lado, entiendo por lo que estás pasando y no es agradable, por eso quiero negociar acuerdos de pago, descuentos o ampliar tus plazos con las instituciones. ¡Ah! Y si hay marca negativa, también te ayudo a borrarla; en pocas palabras te daré opciones según lo que te convenga.'
        ],
        [
            '¿Quién absorbe mi deuda?',
            'En realidad no trabajo así; yo te ayudaré a negociar con las instituciones y te acompañaré en todo el proceso para que puedas limpiar poco a poco tu imagen y así conseguir nuevas oportunidades de crédito.'
        ],
        [
            '¿Cómo consigo tu ayuda?' ,
            'Primero descarga <a style="display:inline" href="http://onelink.to/9b8jt2">Eliiot App</a>, cuéntame a detalle tu caso y compárteme tu Reporte de Crédito Especial, esto me ayudará a encontrar la mejor solución para ti.'
        ],
        [
            '¿Qué tipo de soluciones puedo obtener?',
            'Las soluciones que te ofrezco dependen en gran medida del acuerdo que consiga con cada institución y del caso de tu adeudo, ya que puedo ayudarte a borrar marcas negativas por atrasos o por descuento (quita) y/o negociar más plazos para liquidar.'
        ],
        [
            '¿Vas a solucionar todas mis deudas?' ,
            'Digamos que voy a ayudarte con las negociaciones, escoger tus mejores opciones y procurar que cada posible camino sea algo factible para ti y avancemos poco a poco.'
        ],
        [
            '¿Tú me darás crédito?' ,
            'No por ahora, mi objetivo es darte las herramientas que necesitas para limpiar tu historial y así conseguir un crédito. Sobre todo quiero que te lleves los mejores aprendizajes de esta situación para no repetirla en un futuro.'
        ],
        [
            '¿Cómo puedo consultar que la institución de mi adeudo autorizó la oferta que me diste?' ,
            'Cuando cree tu plan, te daré un código de identificación para que lo consultes si necesitas estar seguro.'
        ],
        [
            '¿Qué pasa si no me das solución?' ,
            'Si esto sucediera, solo significa que en ese momento no logré encontrar una opción significativa, pero nunca me rindo. Por eso te contactaré cuando tenga algo que te convenga. Mientras tanto, te ofrezco mi ayuda profesional para asesorarte con tu vida financiera.'
        ],
        [
            '¿Qué hago si la solución que me ofreces no se adapta a mis ingresos?' ,
            'Dímelo directo y con confianza. Envíame un correo a <a style="display: inline" href="mailto:hola@eliiot.com">hola@eliiot.com</a> con el asunto: “Tu solución no me sirve” y juntos encontraremos otra, solo necesito conocer a detalle tus ingresos y egresos para adaptar las ofertas.'
        ],
        [
            '¿Quién ve la información que comparto?' ,
            'Esto es un asunto solo entre nosotros. No la compartiré con nadie a menos que sea una oportunidad para ti. Solo te pido estos datos para conocer más a fondo tu situación. '
        ],
        [
            '¿Qué es el reporte de crédito especial?' ,
            '¡Buena pregunta! Este documento es una especie de carta de presentación que le dice a los bancos e instituciones cómo te has comportado hasta el momento con tus adeudos; si te has atrasado, cuánto has pagado, si estás en buró, por qué y a quién le debes. Este documento lo consigues en línea mediante Circulo de Crédito o Buró de Crédito de forma gratuita una vez al año. Si lo consultas más de una vez al año tendrás que pagar por esa información. Digamos que esta carta es la responsable para que te aprueben o no cualquier crédito.'
        ],
        [
            '¿Qué es una marca negativa y como me perjudica?' ,
            '¡Uff! En términos sencillos, una marca negativa es lo que le indica a los bancos e instituciones que te has atrasado o pagado una deuda con descuento (o quita).<br/><br/>Esta es la principal razón por la que no te dan un crédito hipotecario, automotriz, personal, tarjeta departamental o de crédito; ¿cómo se enteran? Pues porque ellos revisan tu historial después de que ingresas tu solicitud. '
        ],
        [
            '¿Qué hago si me rechazaron un crédito o una tarjeta?' ,
            '¡Cuéntamelo de inmediato a través de mi app! Mi mejor consejo en este caso es que no corras a pedirle a otros institución, esto solo te crea mala reputación.'
        ],
        [
            '¿Qué pasa cuando pago con quita (descuento)?' ,
            '¡Buena esa pregunta! Estoy seguro que cuando te ofrecen descuento sientes que por fin ves luz en tu camino, pero la realidad es que si quieres tener acceso a un crédito en un futuro esta no es tu mejor opción por muy inmediata que parezca. Ya que al pagar así, tu historial tendrá una marca negativa y será muy complicado conseguir crédito. '
        ]

    ]
    );

    created(){}

}
