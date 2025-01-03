import AppHeader from "./AppHeader.jsx";
import {Layout, Spin} from "antd";
import AppSider from "./AppSider.jsx";
import AppContent from "./AppContent.jsx";
import CryptoContext from "../../context/crypto-context.jsx";
import {useContext} from "react";

export default function AppLayout() {
    const { loading } = useContext(CryptoContext)

    if (loading) {
        return <Spin fullscreen />
    }

    return (
        <Layout>
            <AppHeader />
            <Layout>
                <AppSider/>
                <AppContent/>
            </Layout>
        </Layout>
    )
}