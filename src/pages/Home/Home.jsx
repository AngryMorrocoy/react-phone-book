import RequiresAuth from '../../components/RequiresAuth/RequiresAuth';

const Home = () => {
  return (
    <RequiresAuth>
      <div>
        <p>Hola mundo</p>
      </div>
    </RequiresAuth>
  );
};

export default Home;
