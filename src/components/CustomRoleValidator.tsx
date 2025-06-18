import { useContext } from 'preact/hooks';           // o 'react'
import { SessionContext } from '../hooks/useUserSession';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ErrorState } from '../components/CustomError';

type AdminProtectorProps = { children: React.ReactNode, role: string };

export const CustomRoleValidator = ({ children, role }: AdminProtectorProps) => {
  const session = useContext(SessionContext);
  if (session === null) {
    throw new Error('AdminProtector debe estar dentro de CustomUserProvider');
  }

  const { user, isLoading } = session;

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  // Si no hay user o no es admin
  if (!user || user.role !== role) {
    return (
      <ErrorState
        title="Parece que no deberías estar aquí."
        message="Tipo de usuario incorrecto, por favor regresa."
        actionLabel="Regresar"
        onAction={() => window.history.back()}
      />
    );
  }

  // Si es admin, renderiza sus hijos tal cual
  return <>{children}</>;
};