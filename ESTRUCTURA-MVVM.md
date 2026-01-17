# Guía de Estructura MVVM

## Estructura del Proyecto

```
qwee/
├── app/                          # RUTAS (Expo Router - no mover)
│   ├── _layout.tsx               # Layout raíz
│   ├── modal.tsx                 # Pantalla modal
│   └── (tabs)/
│       ├── _layout.tsx           # Layout de tabs
│       ├── index.tsx             # Pantalla Home
│       └── explore.tsx           # Pantalla Explore
│
├── views/                        # CAPA DE VISTA
│   └── components/               # Componentes reutilizables de UI
│       ├── external-link.tsx
│       ├── haptic-tab.tsx
│       ├── hello-wave.tsx
│       ├── parallax-scroll-view.tsx
│       ├── themed-text.tsx
│       ├── themed-view.tsx
│       └── ui/
│           ├── collapsible.tsx
│           ├── icon-symbol.tsx
│           └── icon-symbol.ios.tsx
│
├── viewmodels/                   # CAPA VIEWMODEL (lógica de presentación)
│                                 # Aquí van los hooks de estado y lógica de UI
│
├── models/                       # CAPA MODEL (modelos de datos)
│                                 # Interfaces, tipos, entidades
│
├── services/                     # SERVICIOS
│   ├── api/                      # Llamadas a APIs externas
│   └── storage/                  # Almacenamiento local (AsyncStorage, etc.)
│
├── hooks/                        # HOOKS PERSONALIZADOS
│   ├── use-color-scheme.ts
│   ├── use-color-scheme.web.ts
│   └── use-theme-color.ts
│
├── constants/                    # CONSTANTES
│   └── theme.ts                  # Colores y fuentes
│
├── utils/                        # UTILIDADES
│                                 # Funciones helper reutilizables
│
└── assets/                       # RECURSOS ESTÁTICOS
    └── images/
```

---

## Dónde va cada cosa

| Tipo de archivo | Ubicación | Ejemplo |
|-----------------|-----------|---------|
| **Pantallas/Rutas** | `app/` | `app/(tabs)/home.tsx` |
| **Componentes UI** | `views/components/` | `themed-button.tsx` |
| **Componentes específicos** | `views/components/ui/` | `icon-symbol.tsx` |
| **ViewModels (lógica de estado)** | `viewmodels/` | `useHomeViewModel.ts` |
| **Modelos/Tipos** | `models/` | `User.ts`, `Product.ts` |
| **Servicios API** | `services/api/` | `userService.ts` |
| **Storage local** | `services/storage/` | `authStorage.ts` |
| **Hooks reutilizables** | `hooks/` | `useAuth.ts` |
| **Constantes** | `constants/` | `theme.ts`, `config.ts` |
| **Utilidades** | `utils/` | `formatDate.ts` |
| **Imágenes/Assets** | `assets/images/` | `logo.png` |

---

## Flujo MVVM

```
View (app/) → ViewModel (viewmodels/) → Model (models/) + Services (services/)
```

1. **View** (`app/`): Las pantallas solo se encargan de renderizar UI
2. **ViewModel** (`viewmodels/`): Contiene la lógica de presentación y estado
3. **Model** (`models/`): Define las estructuras de datos
4. **Services** (`services/`): Maneja la comunicación externa (API, storage)

---

## Ejemplo de uso

Para importar componentes:

```typescript
import { ThemedText } from '@/views/components/themed-text';
import { IconSymbol } from '@/views/components/ui/icon-symbol';
```

Para importar desde otras capas:

```typescript
// ViewModel
import { useHomeViewModel } from '@/viewmodels/useHomeViewModel';

// Model
import { User } from '@/models/User';

// Services
import { userService } from '@/services/api/userService';

// Hooks
import { useColorScheme } from '@/hooks/use-color-scheme';

// Constants
import { Colors } from '@/constants/theme';

// Utils
import { formatDate } from '@/utils/formatDate';
```

---

## Descripción de cada capa

### `app/` - Rutas y Pantallas
Carpeta especial de Expo Router. Define las rutas de la aplicación basándose en la estructura de archivos. No mover esta carpeta.

### `views/components/` - Componentes de UI
Componentes visuales reutilizables que no contienen lógica de negocio. Solo se encargan de renderizar UI.

### `viewmodels/` - ViewModels
Contienen la lógica de presentación. Aquí van los custom hooks que manejan el estado y la lógica de las pantallas. Ejemplo:

```typescript
// viewmodels/useHomeViewModel.ts
export function useHomeViewModel() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    setLoading(true);
    const data = await userService.getUsers();
    setUsers(data);
    setLoading(false);
  };

  return { users, loading, loadUsers };
}
```

### `models/` - Modelos de datos
Interfaces y tipos TypeScript que definen la estructura de los datos:

```typescript
// models/User.ts
export interface User {
  id: string;
  name: string;
  email: string;
}
```

### `services/` - Servicios
Lógica de comunicación con APIs externas y almacenamiento local:

```typescript
// services/api/userService.ts
export const userService = {
  getUsers: async (): Promise<User[]> => {
    const response = await fetch('/api/users');
    return response.json();
  }
};
```

### `hooks/` - Hooks personalizados
Hooks reutilizables que no son específicos de una pantalla (a diferencia de los viewmodels).

### `constants/` - Constantes
Valores constantes como colores, configuraciones, etc.

### `utils/` - Utilidades
Funciones helper puras y reutilizables.
