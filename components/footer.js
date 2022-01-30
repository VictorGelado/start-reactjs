import appConfig from '../config.json';


export default function Footer() {
    return (
        <div>
          <a
            href='https://github.com/VictorGelado'
            target='_blank'
          >
            <span>Coded by</span> VictorGelado
          </a>

          <style jsx>{`
            div {
              background: ${appConfig.theme.colors.neutrals[900]};
              width: 100%;
              height: 8vh;
              position: absolute;
              bottom: 0;
							left: 0;
							display: flex;
							align-items: center;
							justify-content: center;
            }
            a {
              color: ${appConfig.theme.colors.neutrals[100]};
              text-decoration: none;
              font-size: 18px;
              font-weight: 700;
            }          
						span {
							color: ${appConfig.theme.colors.neutrals[300]};
							font-weight: 500;
						}        
          `}</style>
        </div>
    )
}