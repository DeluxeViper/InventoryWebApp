package com.deluxeviper.InventoryTrackingWebApp.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "inventory_items")
@Data
public class InventoryItem {
    @Id
    @GeneratedValue
    Long id;

    private String productName;

    private Integer quantity;

    private Float price;

    private String createdAt;
}
