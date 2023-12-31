# Employment Data


## Dbt Schemes

[Reference data](./files/DBT_Schemes.pdf)

```json

{{#include ./files/json/dbt_schemes.json}}

```

# Population data

```json

{{#include ./files/json/population_data.json}}

```

## Percentage of people getting EPF through Direct Benefit Transfers schemes

Percentage of people getting EPF through dbt schemes (age: 15-64): 6.7

```python
percentage = (61712775/(472653000+447337000))*100
print(percentage) 
# 6.707983238948249
```

## Percentage by payroll

[Payroll Data EPFO Dec 2023](./files/Payroll_Data_EPFO_Dec_2023.pdf)

[epfindia.gov.in](https://www.epfindia.gov.in/site_en/Estimate_of_Payroll.php)

Net payroll Dec 2023: 1529277

Percentage of people got payroll in dec 2023 (age: 15-64) = 0.16

```python
percentage = (1529277/(472653000+447337000))*100
print(percentage) 
# 0.16622756769095318
```


# To do (Not found the data yet)

- State wise calculation
- District wise calculation
- By male
- By female