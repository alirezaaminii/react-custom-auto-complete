import {createUseStyles} from "react-jss";
import {colors} from "../../assets/colors";

interface StyleProps {
  isOpen: boolean;
}

export const useDropdownStyles = createUseStyles({
  dropdownContainer: {
    position: 'relative',
    width: '375px',
  },
  select: {
    boxSizing: 'border-box',
    width: '100%',
    height: '48px',
    padding: '8px',
    color: colors.secondary,
    border: `1px solid ${colors.stroke}`,
    backgroundColor: colors.white,
    borderRadius: '12px',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 200ms',
    outline: '2px solid transparent',
    '&:hover': {
      'outline-color': colors.primary + 20,
    },
    '&:focus': {
      'outline-color': colors.primary + 20,
      border: `2px solid ${colors.primary + 40}`,
    },
  },
  angleIcon: {
    transition: 'all 200ms',
    transform: (props: StyleProps) => props.isOpen ? 'rotateX(180deg)' : 'rotateX(0)',
  },
  dropdownMenu: {
    boxSizing: 'border-box',
    position: 'absolute',
    top: (props: StyleProps) => props.isOpen ? '60px' : '0',
    width: '100%',
    left: 0,
    padding: '12px',
    backgroundColor: colors.white,
    border: `1px solid ${colors.stroke}`,
    borderRadius: '20px',
    overflow: 'hidden',
    maxHeight: '200px',
    zIndex: (props: StyleProps) => props.isOpen ? 1 : -1,
    opacity: (props: StyleProps) => props.isOpen ? 1 : 0,
  },
  dropdownMenuInsideContainer: {
    transition: 'all 200ms',
    paddingRight: '2px',
    width: '100%',
    maxHeight: '186px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '8px',
      marginRight: '20px'
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: '20px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '20px',
      backgroundColor: colors.secondary + 20,

      '&:hover': {
        backgroundColor: colors.primary + 40,
      },
    },
  },
  dropdownMenuItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '8px',
    marginTop: '4px',
    cursor: 'pointer',
    color: colors.secondary,
    '&:hover': {
      backgroundColor: colors.primary + 10,
    },
    '&:focus': {
      backgroundColor: colors.primary + 10,
      outline: 0,
    },
    '&.selected': {
      backgroundColor: colors.primary + 20,
    }
  },
});