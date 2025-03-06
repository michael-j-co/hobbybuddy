import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import PageHeader from "../components/PageHeader";
import AvatarWithMessage from "../components/AvatarWithMessage";
import PointBalance from "../components/PointBalance";
import ActionButton from "../components/ActionButton";
import ConfettiCannon from "react-native-confetti-cannon"; // <-- Confetti library

const offers = [
  {
    id: "1",
    title: "15% off of hiking boots from REI",
    points: 1000,
    sponsored: true,
  },
  {
    id: "2",
    title: "25% off of hiking poles from Patagonia",
    points: 2000,
    sponsored: false,
  },
];

const RedeemPoints = ({ navigation }) => {
  const [selectedOffers, setSelectedOffers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Toggle offer selection
  const toggleOffer = (id) => {
    setSelectedOffers((prev) =>
      prev.includes(id)
        ? prev.filter((offerId) => offerId !== id)
        : [...prev, id]
    );
  };

  // Handle Redeem action
  const handleRedeem = () => {
    if (selectedOffers.length === 0) return;
    // Here you could place any logic for redeeming the offer
    setShowPopup(true);
    setShowConfetti(true);
  };

  return (
    <View style={styles.container}>
      <PageHeader
        title="Redeem Points"
        onBackPress={() => navigation.goBack()}
      />
      <PointBalance points={1250} navigation={navigation} hideRedeem={true} />

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <AvatarWithMessage motivation="“Points can go towards badges and sponsor discounts.”" />
      </View>

      {/* New Point Balance Display Box (example) */}
      <View style={styles.balanceBox}>
        <Text style={styles.balanceBoxTitle}>Point Balance</Text>
        <Text style={styles.balanceBoxPoints}>10,000 Points</Text>
        <Text style={styles.balanceBoxSubtitle}>
          Point balance will carry over when you change hobbies
        </Text>
      </View>

      {/* Offer Selection */}
      <Text style={styles.offerTitle}>
        Select one or more of the following:
      </Text>
      <FlatList
        data={offers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.offerItem,
              item.sponsored && styles.sponsored,
              selectedOffers.includes(item.id) && styles.selectedOffer,
            ]}
            onPress={() => toggleOffer(item.id)}
          >
            {item.sponsored && (
              <Text style={styles.sponsoredTag}>Sponsored</Text>
            )}
            <Text style={styles.offerText}>{item.title}</Text>
            <Text style={styles.offerPoints}>{item.points} Points</Text>
          </TouchableOpacity>
        )}
      />

      {/* Redeem Button */}
      <TouchableOpacity
        style={[
          styles.redeemButton,
          selectedOffers.length === 0 && styles.redeemButtonDisabled,
        ]}
        disabled={selectedOffers.length === 0}
        onPress={handleRedeem}
      >
        <Text style={styles.redeemText}>Redeem</Text>
      </TouchableOpacity>

      {/* Pop-up Modal */}
      <Modal
        visible={showPopup}
        animationType="fade"
        transparent
        onRequestClose={() => setShowPopup(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Confetti Animation */}
            {showConfetti && (
              <ConfettiCannon
                count={150}
                origin={{ x: 0, y: 0 }}
                fadeOut
                autoStart
                onAnimationEnd={() => setShowConfetti(false)}
              />
            )}

            <Text style={styles.modalTitle}>Congratulations!</Text>
            <Text style={styles.modalMessage}>
              Your discount code will be emailed to you.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowPopup(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  balanceBox: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderWidth: 1.5,
    borderColor: "#2C3E50",
    borderRadius: 8,
    backgroundColor: "white",
  },
  balanceBoxTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
  balanceBoxPoints: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  balanceBoxSubtitle: {
    fontSize: 12,
    textAlign: "center",
    color: "#666",
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  offerItem: {
    backgroundColor: "white",
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#2C3E50",
  },
  sponsored: { backgroundColor: "#FFF" },
  sponsoredTag: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 5,
  },
  offerText: { fontSize: 14, fontWeight: "bold", color: "#333" },
  offerPoints: { fontSize: 14, color: "#666", marginTop: 5 },
  selectedOffer: { backgroundColor: "#FFC107" },
  redeemButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    marginBottom: 35,
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  redeemButtonDisabled: { backgroundColor: "#ccc" },
  redeemText: { fontSize: 16, fontWeight: "bold", color: "white" },

  // Modal styles
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#003F5C",
  },
  modalMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  closeButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default RedeemPoints;
