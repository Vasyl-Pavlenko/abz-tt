import RingLoader from 'react-spinners/RingLoader';

export const Loader = ({ isLoading }) => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <RingLoader
        loading={isLoading}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#36d7b7"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};
