import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from '@mui/material';

const CartWidget = () =>{
    return(
        <>
        <Badge color="secondary" badgeContent={99}>
        <AiOutlineShoppingCart />
        </Badge>
        </>
    );
}
export default CartWidget;