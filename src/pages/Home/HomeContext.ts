import { createContext } from 'react';

import { Dragon } from 'api';

interface HomeContext {
  dragonToDelete: Dragon | null;
  deleteDragon: (data: Dragon) => void;
  closeModal: () => void;
}

export default createContext<HomeContext>({
  dragonToDelete: null,
  deleteDragon: () => ({}),
  closeModal: () => ({}),
});
