import { css } from "@emotion/react";
import Especialidades from "./Especialidades";

interface Banderas {
	pais?: string;
}

//create array with contry names;


const BannerEspecialidades: React.FC<Banderas> = ({ pais }) => {
	
	return (
		<div
			className="bannerEspecialidades"
			css={css`
				display: flex;
				margin-top: 8px;
				justify-content: center;
				align-items: center;
			`}
		>
 <Especialidades
				name={data?.name}
				text={data?.description}
				image
			/>
		</div>
	);
};

export default BannerEspecialidades;


			{/* <Especialidades
				name="Honduras"
				text="El café de HONDURAS es famoso por su contundente aroma, cosechado en las famosas planicies de la región, cabe destacar sus tonos de sabor afrutados, algo amargos y su efecto contundente a la hora despertarnos de buena mañana."
				image={`https://countryflagsapi.com/svg/HN`}
			/>
			<Especialidades
				name="Costa Rica"
				text="El 'snippet' o fragmento de código viene a ser al desarrollador de software lo que el ladrillo es al albañil. Bueno, más o menos. 

Pero, ¿qué herramientas tenemos a nuestra disposición para ello? Hoy te traemos cuatro de ellas, todas gratuitas o freemium, que cubren un amplio espectro de necesidades"
				image={`https://countryflagsapi.com/svg/cr`}
			/>
			<Especialidades
				name="Brasil"
				text="El 'snippet' o fragmento de código viene a ser al desarrollador de software lo que el ladrillo es al albañil. Bueno, más o menos. 

Pero, ¿qué herramientas tenemos a nuestra disposición para ello? Hoy te traemos cuatro de ellas, todas gratuitas o freemium, que cubren un amplio espectro de necesidades"
				image={`https://countryflagsapi.com/svg/br`}
			/>
			<Especialidades
				name="Colombia"
				text="El 'snippet' o fragmento de código viene a ser al desarrollador de software lo que el ladrillo es al albañil. Bueno, más o menos. 

Pero, ¿qué herramientas tenemos a nuestra disposición para ello? Hoy te traemos cuatro de ellas, todas gratuitas o freemium, que cubren un amplio espectro de necesidades"
				image={`https://countryflagsapi.com/svg/co`}
			/>
			<Especialidades
				name="Vietnam"
				text="El 'snippet' o fragmento de código viene a ser al desarrollador de software lo que el ladrillo es al albañil. Bueno, más o menos. 

Pero, ¿qué herramientas tenemos a nuestra disposición para ello? Hoy te traemos cuatro de ellas, todas gratuitas o freemium, que cubren un amplio espectro de necesidades"
				image={`https://countryflagsapi.com/svg/vn`}
			/>
			<Especialidades
				name="Uganda"
				text="El 'snippet' o fragmento de código viene a ser al desarrollador de software lo que el ladrillo es al albañil. Bueno, más o menos. 

Pero, ¿qué herramientas tenemos a nuestra disposición para ello? Hoy te traemos cuatro de ellas, todas gratuitas o freemium, que cubren un amplio espectro de necesidades"
				image={`https://countryflagsapi.com/svg/UG`}
			/>
			<Especialidades
				name="México"
				text="El 'snippet' o fragmento de código viene a ser al desarrollador de software lo que el ladrillo es al albañil. Bueno, más o menos. 

Pero, ¿qué herramientas tenemos a nuestra disposición para ello? Hoy te traemos cuatro de ellas, todas gratuitas o freemium, que cubren un amplio espectro de necesidades"
				image={`https://countryflagsapi.com/svg/MEX`}
			/>