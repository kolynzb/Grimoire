# Database Diagram
# Database Tables

## **SO (Standard Operations)**

- These must appear on all tables

| Fields         | Type          | description |
| -------------- | ------------- | ----------- |
| add_date       | DATE/DATETIME |             |
| last_edit_date | DATE/DATETIME |             |

### **Entity**

| Fields    | Type | description |
| --------- | ---- | ----------- |
| entity_id | INT  |             |
| client_id | INT  |             |

- **Entity** (`entity_id`) -> **License** (`client_id`)

## Lookup Tables

### **Business Category**

| Fields                 | Type    | description |
| ---------------------- | ------- | ----------- |
| business_category_id   | INT     |             |
| business_category_name | VARCHAR |             |

- **Business Category** (`business_category_id`) -> **Entity** (`business_category_id`)
