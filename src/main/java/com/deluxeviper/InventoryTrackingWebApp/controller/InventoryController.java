package com.deluxeviper.InventoryTrackingWebApp.controller;

import com.deluxeviper.InventoryTrackingWebApp.model.InventoryItem;
import com.deluxeviper.InventoryTrackingWebApp.repository.InventoryRepository;
import com.deluxeviper.InventoryTrackingWebApp.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("api/inventory")
public class InventoryController {

    @Autowired
    InventoryRepository inventoryRepository;

    @Autowired
    InventoryService inventoryService;

    @GetMapping("/hello")
    public String hello() {
        return "Hello there";
    }

    @GetMapping
    public ResponseEntity<List<InventoryItem>> getAllInventoryItems() {
        try {
            List<InventoryItem> items = new ArrayList<>(inventoryService.getAllInventoryItems());

            return new ResponseEntity<>(items, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<InventoryItem> getInventoryItem(@PathVariable("id") Long id) {
        Optional<InventoryItem> item = inventoryService.getInventoryItem(id);

        return item.map(inventoryItem -> new ResponseEntity<>(inventoryItem, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<InventoryItem> createInventoryItem(@RequestBody InventoryItem item) {
        try {
            InventoryItem inventoryItem = inventoryService.createInventoryItem(item);
            return new ResponseEntity<>(inventoryItem, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/items")
    public ResponseEntity<List<InventoryItem>> createInventoryItems(@RequestBody List<InventoryItem> items) {
        try {
            List<InventoryItem> inventoryItems = inventoryRepository.saveAll(items);
            return new ResponseEntity<>(inventoryItems, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<InventoryItem> updateInventoryItem(@PathVariable("id") Long id, @RequestBody InventoryItem itemToUpdate) {
        InventoryItem savedItem = inventoryService.updateInventoryItem(id, itemToUpdate);

        if (savedItem != null) {
            return new ResponseEntity<>(savedItem, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }
//        if (itemOpt.isPresent()) {
//            InventoryItem item = itemOpt.get();
//            item.setCreatedAt(itemToUpdate.getCreatedAt());
//            item.setPrice(itemToUpdate.getPrice());
//            item.setProductName(itemToUpdate.getProductName());
//            item.setQuantity(itemToUpdate.getQuantity());
//
//            return new ResponseEntity<>(inventoryRepository.save(item), HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteInventoryItem(@PathVariable("id") long id) {
        try {
            inventoryService.deleteInventoryItem(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
