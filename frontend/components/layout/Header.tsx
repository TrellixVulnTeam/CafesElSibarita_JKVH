import { css } from "@emotion/react";
import { MainMenu } from "./MainMenu";
import { LateralMenu } from "./LateralMenu";
import { HeaderButton } from "./HeaderButton";
import { TokenApp } from "../shared/TokenApp";
import { BotonPrueba } from "../tailwind components/botonprueba";

export const Header = () => {
	return (
		<>
			<TokenApp>
				<div
					css={css`
						display: flex;
						justify-content: space-between;
						width: 100%;
						align-items: center;
						position: fixed;
						z-index: 2;
					`}
				>
					{" "}
					<MainMenu />
					<div
						css={css`
							margin-right: 5px;
							display: flex;
						`}
					>
						{" "}
						<BotonPrueba text="EDITAR" href="/editarespecialidades" />
						<LateralMenu />
					</div>
				</div>
			</TokenApp>
		</>
	);
};
