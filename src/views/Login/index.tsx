import * as S from './styles'

export function Login(){
    return(
       <S.Container>
            <form>
                <input type="text" placeholder='email@email.com' />
                <input type="text" placeholder='***************' />
                <S.ButtonGroup>
                    <button>
                        Entrar
                    </button>
                    <button>Cadastrar</button>
                </S.ButtonGroup>
            </form>
       </S.Container>
    )
}