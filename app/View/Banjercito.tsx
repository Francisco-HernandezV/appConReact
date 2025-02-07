import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
export default function Banjercito() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>CTA TRADICIONAL</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="notifications" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.container2}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.accountType}>CTA TRADICIONAL Nº **** 1967</Text>
                    </View>
                    <Text style={styles.balanceLabel}>Disponible</Text>
                    <Text style={styles.balance}>$2,983.42</Text>
                    <Text style={styles.blockedLabel}>Bloqueado</Text>
                    <Text style={styles.blocked}>$0.00</Text>
                    <Text style={styles.sbcLabel}>S.B.C</Text>
                    <Text style={styles.sbc}>$0.00</Text>
                    <Text style={styles.totalBalanceLabel}>Saldo Total</Text>
                    <Text style={styles.totalBalance}>$2,983.42</Text>
                </View>
                <View style={styles.operations}>
                    <TouchableOpacity style={styles.operationButton}>
                        <Text style={styles.operationText}>Transferir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operationButton}>
                        <Text style={styles.operationText}>Pagar Tarjetas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operationButton}>
                        <Text style={styles.operationText}>Retiro Sin Tarjeta</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.movementsLabel}>Movimientos</Text>
            <Text style={styles.noRecords}>*30* NO SE ENCONTRARON REGISTROS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#00686f",
        padding: 30,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    iconButton: {
        padding: 5,
    },
    headerText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        flex: 1,
        textAlign: "center",
    },
    container2: {
        backgroundColor: "#e9f6f4",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    card: {
        padding: 0,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#009d7e",
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    accountType: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
    balanceLabel: {
        fontSize: 14,
        color: "#666666",
        marginTop: 10,
    },
    balance: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
    },
    blockedLabel: {
        fontSize: 14,
        color: "#666666",
        marginTop: 10,
    },
    blocked: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
    },
    sbcLabel: {
        fontSize: 14,
        color: "#666666",
        marginTop: 10,
    },
    sbc: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
    },
    totalBalanceLabel: {
        fontSize: 14,
        color: "#666666",
        marginTop: 10,
    },
    totalBalance: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
    },
    operations: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    operationButton: {
        backgroundColor: "#009d7e",
        padding: 15,
        borderRadius: 5,
        width: "30%",
        alignItems: "center",
    },
    operationText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    movementsLabel: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#666666",
        marginTop: 20,
        textAlign: "center",
    },
    noRecords: {
        fontSize: 14,
        color: "#666666",
        textAlign: "center",
        marginTop: 10,
    },
});
