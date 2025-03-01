import AuthGuard from './AuthGuard';

const ProtectedRoute = ({ component: Component }) => {
  return (
    <AuthGuard>
      <Component />
    </AuthGuard>
  );
};

export default ProtectedRoute; 