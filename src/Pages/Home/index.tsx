import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { ptBR } from 'date-fns/locale'

import { TextRegular, TitleText } from '../../Components/typography'
import { useDataStudent } from '../../Hooks/useDataStudents'
import { useUser } from '../../Hooks/useUser'
import { TableDataUsers } from './components/TableDataUsers'
import {
  ContainerCalendar,
  ContainerData,
  ContainerDataUser,
  ContainerHome,
  ContainerLocalizationProvider,
  ContentDataUser,
  DataUserContainer,
} from './styled'

export const Home = () => {
  const { userDataLogin } = useUser()
  const { menuIsVisible } = useDataStudent()

  console.log(userDataLogin)
  return (
    <ContainerHome menuIsVisible={menuIsVisible}>
      <TitleText size="m" weight={600}>
        Dados do Usuário
      </TitleText>

      <ContainerData>
        <ContainerDataUser>
          <ContentDataUser>
            <TitleText weight={600}>Meus Dados</TitleText>

            <DataUserContainer>
              <div>
                <TextRegular weight={600}>Nome</TextRegular>
                <TitleText size="sm" weight={600}>
                  {userDataLogin.name}
                </TitleText>
              </div>

              <div>
                <TextRegular weight={600}>E-Mail</TextRegular>
                <TitleText size="sm" weight={600}>
                  {userDataLogin.email}
                </TitleText>
              </div>

              <div>
                <TextRegular weight={600}>Cargo</TextRegular>
                <TitleText size="sm" weight={600}>
                  {userDataLogin.cargo}
                </TitleText>
              </div>

              <div>
                <TextRegular weight={600}>Tel</TextRegular>
                <TitleText size="sm" weight={600}>
                  {userDataLogin.tel}
                </TitleText>
              </div>
            </DataUserContainer>
          </ContentDataUser>
        </ContainerDataUser>

        <ContainerCalendar>
          <ContainerLocalizationProvider
            adapterLocale={ptBR}
            dateAdapter={AdapterDateFns}
          >
            <DateCalendar />
          </ContainerLocalizationProvider>
        </ContainerCalendar>
      </ContainerData>

      <TableDataUsers />
    </ContainerHome>
  )
}
