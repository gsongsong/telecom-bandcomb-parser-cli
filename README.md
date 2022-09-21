# parse-bandcomb

3GPP E-UTRA, MR-DC and NR band combination related capabilities parser

## Usage

```sh
npx parse-bandcomb <filepath>
```

### Parameter

- `filepath`: Content of a file indicated by `filepath` shall be in a form of a `pcap` file which contains _UECapabilityInformation_.

### Output

This `parse-bandcomb` CLI writes parsed E-UTRA, MR-DC and NR band combination related capabilities to `capabilities-<unique_value>.csv`
