import { useForm } from "react-hook-form";
import { Botonformulario } from "./Botondeformulario";
import { css } from "@emotion/react";
import { CreateSpeciality } from "../../lib/SpecialityRepo";

const Pais = [
	{ code: "AD", pais: "Andorra" },
	{ code: "AE", pais: "Emiratos Árabes Unidos" },
	{ code: "AF", pais: "Afganistán" },
	{ code: "AG", pais: "Antigua y Barbuda" },
	{ code: "AI", pais: "Anguila" },
	{ code: "AL", pais: "Albania" },
	{ code: "AM", pais: "Armenia" },
	{ code: "AN", pais: "Antillas Neerlandesas" },
	{ code: "AO", pais: "Angola" },
	{ code: "AQ", pais: "Antártida" },
	{ code: "AR", pais: "Argentina" },
	{ code: "AS", pais: "Samoa Americana" },
	{ code: "AT", pais: "Austria" },
	{ code: "AU", pais: "Australia" },
	{ code: "AW", pais: "Aruba" },
	{ code: "AX", pais: "Islas Áland" },
	{ code: "AZ", pais: "Azerbaiyán" },
	{ code: "BA", pais: "Bosnia y Herzegovina" },
	{ code: "BB", pais: "Barbados" },
	{ code: "BD", pais: "Bangladesh" },
	{ code: "BE", pais: "Bélgica" },
	{ code: "BF", pais: "Burkina Faso" },
	{ code: "BG", pais: "Bulgaria" },
	{ code: "BH", pais: "Bahréin" },
	{ code: "BI", pais: "Burundi" },
	{ code: "BJ", pais: "Benin" },
	{ code: "BL", pais: "San Bartolomé" },
	{ code: "BM", pais: "Bermudas" },
	{ code: "BN", pais: "Brunéi" },
	{ code: "BO", pais: "Bolivia" },
	{ code: "BR", pais: "Brasil" },
	{ code: "BS", pais: "Bahamas" },
	{ code: "BT", pais: "Bhután" },
	{ code: "BV", pais: "Isla Bouvet" },
	{ code: "BW", pais: "Botsuana" },
	{ code: "BY", pais: "Belarús" },
	{ code: "BZ", pais: "Belice" },
	{ code: "CA", pais: "Canadá" },
	{ code: "CC", pais: "Islas Cocos" },
	{ code: "CF", pais: "República Centro-Africana" },
	{ code: "CG", pais: "Congo" },
	{ code: "CH", pais: "Suiza" },
	{ code: "CI", pais: "Costa de Marfil" },
	{ code: "CK", pais: "Islas Cook" },
	{ code: "CL", pais: "Chile" },
	{ code: "CM", pais: "Camerún" },
	{ code: "CN", pais: "China" },
	{ code: "CO", pais: "Colombia" },
	{ code: "CR", pais: "Costa Rica" },
	{ code: "CU", pais: "Cuba" },
	{ code: "CV", pais: "Cabo Verde" },
	{ code: "CX", pais: "Islas Christmas" },
	{ code: "CY", pais: "Chipre" },
	{ code: "CZ", pais: "República Checa" },
	{ code: "DE", pais: "Alemania" },
	{ code: "DJ", pais: "Yibuti" },
	{ code: "DK", pais: "Dinamarca" },
	{ code: "DM", pais: "Domínica" },
	{ code: "DO", pais: "República Dominicana" },
	{ code: "DZ", pais: "Argel" },
	{ code: "EC", pais: "Ecuador" },
	{ code: "EE", pais: "Estonia" },
	{ code: "EG", pais: "Egipto" },
	{ code: "EH", pais: "Sahara Occidental" },
	{ code: "ER", pais: "Eritrea" },
	{ code: "ES", pais: "España" },
	{ code: "ET", pais: "Etiopía" },
	{ code: "FI", pais: "Finlandia" },
	{ code: "FJ", pais: "Fiji" },
	{ code: "FK", pais: "Islas Malvinas" },
	{ code: "FM", pais: "Micronesia" },
	{ code: "FO", pais: "Islas Faroe" },
	{ code: "FR", pais: "Francia" },
	{ code: "GA", pais: "Gabón" },
	{ code: "GB", pais: "Reino Unido" },
	{ code: "GD", pais: "Granada" },
	{ code: "GE", pais: "Georgia" },
	{ code: "GF", pais: "Guayana Francesa" },
	{ code: "GG", pais: "Guernsey" },
	{ code: "GH", pais: "Ghana" },
	{ code: "GI", pais: "Gibraltar" },
	{ code: "GL", pais: "Groenlandia" },
	{ code: "GM", pais: "Gambia" },
	{ code: "GN", pais: "Guinea" },
	{ code: "GP", pais: "Guadalupe" },
	{ code: "GQ", pais: "Guinea Ecuatorial" },
	{ code: "GR", pais: "Grecia" },
	{ code: "GS", pais: "Georgia del Sur e Islas Sandwich del Sur" },
	{ code: "GT", pais: "Guatemala" },
	{ code: "GU", pais: "Guam" },
	{ code: "GW", pais: "Guinea-Bissau" },
	{ code: "GY", pais: "Guayana" },
	{ code: "HK", pais: "Hong Kong" },
	{ code: "HM", pais: "Islas Heard y McDonald" },
	{ code: "HN", pais: "Honduras" },
	{ code: "HR", pais: "Croacia" },
	{ code: "HT", pais: "Haití" },
	{ code: "HU", pais: "Hungría" },
	{ code: "ID", pais: "Indonesia" },
	{ code: "IE", pais: "Irlanda" },
	{ code: "IL", pais: "Israel" },
	{ code: "IM", pais: "Isla de Man" },
	{ code: "IN", pais: "India" },
	{ code: "IO", pais: "Territorio Británico del Océano Índico" },
	{ code: "IQ", pais: "Irak" },
	{ code: "IR", pais: "Irán" },
	{ code: "IS", pais: "Islandia" },
	{ code: "IT", pais: "Italia" },
	{ code: "JE", pais: "Jersey" },
	{ code: "JM", pais: "Jamaica" },
	{ code: "JO", pais: "Jordania" },
	{ code: "JP", pais: "Japón" },
	{ code: "KE", pais: "Kenia" },
	{ code: "KG", pais: "Kirguistán" },
	{ code: "KH", pais: "Camboya" },
	{ code: "KI", pais: "Kiribati" },
	{ code: "KM", pais: "Comoros" },
	{ code: "KN", pais: "San Cristóbal y Nieves" },
	{ code: "KP", pais: "Corea del Norte" },
	{ code: "KR", pais: "Corea del Sur" },
	{ code: "KW", pais: "Kuwait" },
	{ code: "KY", pais: "Islas Caimán" },
	{ code: "KZ", pais: "Kazajstán" },
	{ code: "LA", pais: "Laos" },
	{ code: "LB", pais: "Líbano" },
	{ code: "LC", pais: "Santa Lucía" },
	{ code: "LI", pais: "Liechtenstein" },
	{ code: "LK", pais: "Sri Lanka" },
	{ code: "LR", pais: "Liberia" },
	{ code: "LS", pais: "Lesotho" },
	{ code: "LT", pais: "Lituania" },
	{ code: "LU", pais: "Luxemburgo" },
	{ code: "LV", pais: "Letonia" },
	{ code: "LY", pais: "Libia" },
	{ code: "MA", pais: "Marruecos" },
	{ code: "MC", pais: "Mónaco" },
	{ code: "MD", pais: "Moldova" },
	{ code: "ME", pais: "Montenegro" },
	{ code: "MG", pais: "Madagascar" },
	{ code: "MH", pais: "Islas Marshall" },
	{ code: "MK", pais: "Macedonia" },
	{ code: "ML", pais: "Mali" },
	{ code: "MM", pais: "Myanmar" },
	{ code: "MN", pais: "Mongolia" },
	{ code: "MO", pais: "Macao" },
	{ code: "MQ", pais: "Martinica" },
	{ code: "MR", pais: "Mauritania" },
	{ code: "MS", pais: "Montserrat" },
	{ code: "MT", pais: "Malta" },
	{ code: "MU", pais: "Mauricio" },
	{ code: "MV", pais: "Maldivas" },
	{ code: "MW", pais: "Malawi" },
	{ code: "MX", pais: "México" },
	{ code: "MY", pais: "Malasia" },
	{ code: "MZ", pais: "Mozambique" },
	{ code: "NA", pais: "Namibia" },
	{ code: "NC", pais: "Nueva Caledonia" },
	{ code: "NE", pais: "Níger" },
	{ code: "NF", pais: "Islas Norkfolk" },
	{ code: "NG", pais: "Nigeria" },
	{ code: "NI", pais: "Nicaragua" },
	{ code: "NL", pais: "Países Bajos" },
	{ code: "NO", pais: "Noruega" },
	{ code: "NP", pais: "Nepal" },
	{ code: "NR", pais: "Nauru" },
	{ code: "NU", pais: "Niue" },
	{ code: "NZ", pais: "Nueva Zelanda" },
	{ code: "OM", pais: "Omán" },
	{ code: "PA", pais: "Panamá" },
	{ code: "PE", pais: "Perú" },
	{ code: "PF", pais: "Polinesia Francesa" },
	{ code: "PG", pais: "Papúa Nueva Guinea" },
	{ code: "PH", pais: "Filipinas" },
	{ code: "PK", pais: "Pakistán" },
	{ code: "PL", pais: "Polonia" },
	{ code: "PM", pais: "San Pedro y Miquelón" },
	{ code: "PN", pais: "Islas Pitcairn" },
	{ code: "PR", pais: "Puerto Rico" },
	{ code: "PS", pais: "Palestina" },
	{ code: "PT", pais: "Portugal" },
	{ code: "PW", pais: "Islas Palaos" },
	{ code: "PY", pais: "Paraguay" },
	{ code: "QA", pais: "Qatar" },
	{ code: "RE", pais: "Reunión" },
	{ code: "RO", pais: "Rumanía" },
	{ code: "RS", pais: "Serbia y Montenegro" },
	{ code: "RU", pais: "Rusia" },
	{ code: "RW", pais: "Ruanda" },
	{ code: "SA", pais: "Arabia Saudita" },
	{ code: "SB", pais: "Islas Solomón" },
	{ code: "SC", pais: "Seychelles" },
	{ code: "SD", pais: "Sudán" },
	{ code: "SE", pais: "Suecia" },
	{ code: "SG", pais: "Singapur" },
	{ code: "SH", pais: "Santa Elena" },
	{ code: "SI", pais: "Eslovenia" },
	{ code: "SJ", pais: "Islas Svalbard y Jan Mayen" },
	{ code: "SK", pais: "Eslovaquia" },
	{ code: "SL", pais: "Sierra Leona" },
	{ code: "SM", pais: "San Marino" },
	{ code: "SN", pais: "Senegal" },
	{ code: "SO", pais: "Somalia" },
	{ code: "SR", pais: "Surinam" },
	{ code: "ST", pais: "Santo Tomé y Príncipe" },
	{ code: "SV", pais: "El Salvador" },
	{ code: "SY", pais: "Siria" },
	{ code: "SZ", pais: "Suazilandia" },
	{ code: "TC", pais: "Islas Turcas y Caicos" },
	{ code: "TD", pais: "Chad" },
	{ code: "TF", pais: "Territorios Australes Franceses" },
	{ code: "TG", pais: "Togo" },
	{ code: "TH", pais: "Tailandia" },
	{ code: "TH", pais: "Tanzania" },
	{ code: "TJ", pais: "Tayikistán" },
	{ code: "TK", pais: "Tokelau" },
	{ code: "TL", pais: "Timor-Leste" },
	{ code: "TM", pais: "Turkmenistán" },
	{ code: "TN", pais: "Túnez" },
	{ code: "TO", pais: "Tonga" },
	{ code: "TR", pais: "Turquía" },
	{ code: "TT", pais: "Trinidad y Tobago" },
	{ code: "TV", pais: "Tuvalu" },
	{ code: "TW", pais: "Taiwán" },
	{ code: "UA", pais: "Ucrania" },
	{ code: "UG", pais: "Uganda" },
	{ code: "US", pais: "Estados Unidos de América" },
	{ code: "UY", pais: "Uruguay" },
	{ code: "UZ", pais: "Uzbekistán" },
	{ code: "VA", pais: "Ciudad del Vaticano" },
	{ code: "VC", pais: "San Vicente y las Granadinas" },
	{ code: "VE", pais: "Venezuela" },
	{ code: "VG", pais: "Islas Vírgenes Británicas" },
	{ code: "VI", pais: "Islas Vírgenes de los Estados Unidos de América" },
	{ code: "VN", pais: "Vietnam" },
	{ code: "VU", pais: "Vanuatu" },
	{ code: "WF", pais: "Wallis y Futuna" },
	{ code: "WS", pais: "Samoa" },
	{ code: "YE", pais: "Yemen" },
	{ code: "YT", pais: "Mayotte" },
	{ code: "ZA", pais: "Sudáfrica" },
];

export const CrudEspecialidades = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitted },
	} = useForm();
	const name = watch("name");
	const text = watch("text");
	const Preimage = Pais.find((bandera) => bandera.pais === name);
	const image = `https://countryflagsapi.com/svg/${Preimage?.code}`;

	const submit = async () => {
		await CreateSpeciality({ name, text, image });
	};

	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			`}
		>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				`}
			>
				<label className="form-label">Nombre de la Especialidad: </label>
				<input
					type="text"
					className="form-control"
					placeholder="Especialidad"
					{...register("name")}
				/>
			</div>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				`}
			>
				<label className="form-label"> Descripción: </label>
				<input
					className="form-control"
					type="text"
					placeholder="Descripción"
					{...register("text")}
				/>
			</div>

			<div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				`}
			>
				<Botonformulario onClick={submit} variant={isSubmitted ? "done" : "pending"}>
					Guardar Especialidad
				</Botonformulario>
			</div>
		</div>
	);
};
