// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract CertificateVerification {

    mapping(string => string) certificates;

    function storeCertificate(
        string memory hash,
        string memory cid
    ) public {

        certificates[hash] = cid;

    }

    function verifyCertificate(
        string memory hash
    ) public view returns(bool){

        return bytes(certificates[hash]).length > 0;

    }

}
