import styled from 'styled-components';

// quando vamos compartilhar um styled-component em paginas,
// criamos ele em um componente separado e o exportamos como padrão(default)
const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;

    svg{
      margin-right: 10px;
    }
  }
`;

export default Container;
