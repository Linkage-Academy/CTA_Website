import { createStyles } from "@mantine/core";

const useFooterStyles = createStyles((theme) => ({
    gridContainer:{
        backgroundColor:"red",
        height:"250px",
        width:"100%",
        display:"grid",
        gridTemplateColumns: "auto auto auto",
        marginBottom:0
    },

    bottomContainer:{
        marginTop:0,
        backgroundColor:"red",
        borderTop:" 1px solid #9C9593"

    },

    box:{
        height:"250px",
        backgroundColor:"red"
    },
    iconBox:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:35,
        width:35,
        backgroundColor:"white",
        borderRadius:"50%"
    },
    icon:{
        display:"block"
    },
    titleStyle:{
        color:"white",
        fontWeight:"bold",
        fontSize:"1.25rem",
    }

}));

export default useFooterStyles;
