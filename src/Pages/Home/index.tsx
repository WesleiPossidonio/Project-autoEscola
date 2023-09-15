import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { ptBR } from 'date-fns/locale'

import { TextRegular, TitleText } from '../../Components/typography'
import { useUser } from '../../Hooks/useUser'
import {
  ContainerData,
  ContainerDataUser,
  ContainerHome,
  ContainerLocalizationProvider,
  ContentDataUser,
  DataUserContainer,
} from './styled'

export const Home = () => {
  const { userDataLogin } = useUser()
  return (
    <ContainerHome>
      <TitleText size="m" weight={600}>
        Dados do Usuário
      </TitleText>

      <ContainerData>
        <ContainerDataUser>
          <ContentDataUser>
            <TitleText>Meus Dados</TitleText>

            <DataUserContainer>
              <div>
                <TextRegular weight={600}>Nome</TextRegular>
                <TitleText>{userDataLogin.name}</TitleText>
              </div>

              <div>
                <TextRegular weight={600}>E-Mail</TextRegular>
                <TitleText>{userDataLogin.email}</TitleText>
              </div>
            </DataUserContainer>
          </ContentDataUser>

          <ContentDataUser>
            <DataUserContainer>
              <div>
                <TextRegular weight={600}>Cargo</TextRegular>
                <TitleText>{userDataLogin.cargo}</TitleText>
              </div>

              <div>
                <TextRegular weight={600}>Tel</TextRegular>
                <TitleText>{userDataLogin.tel}</TitleText>
              </div>
            </DataUserContainer>
          </ContentDataUser>
        </ContainerDataUser>

        <ContainerLocalizationProvider
          adapterLocale={ptBR}
          dateAdapter={AdapterDateFns}
        >
          <DateCalendar />
        </ContainerLocalizationProvider>
      </ContainerData>
    </ContainerHome>
  )
}
