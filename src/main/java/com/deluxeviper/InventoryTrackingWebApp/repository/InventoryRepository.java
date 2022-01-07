package com.deluxeviper.InventoryTrackingWebApp.repository;

import com.deluxeviper.InventoryTrackingWebApp.model.InventoryItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepository extends JpaRepository<InventoryItem, Long> {
}
